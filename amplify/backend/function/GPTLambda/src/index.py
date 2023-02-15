import json
# from helpers import validate_event, prepare_gpt_prompt, call_gpt
import openai
import os
openai.api_key = os.environ.get('OPENAI_API_KEY')

GPT_RESPONSE_TYPE =  ["BRAND_NAME","BRAND_NAME_REFRESH","BRAND_PILLARS","BRAND_VALUES","BRAND_MISION_STATEMENT"]

BRAND_NAME_PROMPT=\
'Act as a Brand marketer produce 5 potential brand names for a business with the business description of \
\n\n"{}" \n\n and has a communication tone of voice of "{}". Return json format.'

BRAND_PILLARS_PROMPT = \
'Act as a Brand marketer produce 1 brand pillar for a business with the business description \
\n"{}"\
\n\n The brand has a communication tone of voice of "{}" and a brand name of "{}". Return 5 pillars and use Json format.'

BRAND_VALUES_PROMPT=\
'Act as a Brand marketer and produce 1 brand value for a business with the business description \
\n\n"{}"\
\n\nThe brand has a communication tone of voice of "{}" and a brand name of "{}"\
\n\nA brand value is defined as the key principles guiding how a company operates—including where it sources its products, how items are delivered to customers, and the way employees are treated. Brand values define precisely how a company operates, achieves its mission statement, and earns money.\
\n\nReturn json format.'

BRAND_MISSION_STATEMENT_PROMPT=\
'Act as a Brand marketer prodce a mission statement of no longer than 3 sentences for a business with the business description \
\n\n"{}"\
\n\nThe brand has a communication tone of voice of "{}", a brand name of "{}" and brand pillars of \
\n"{}"\
\n"{}"\
\n"{}"\
\n"{}"\
\n\nReturn as json format.'

BRAND_TAGLINE_STATEMENT_PROMPT=\
'Act as a Brand marketer produce 5 tagline options for a business with the business description \
\n"{}"\
\n\nThe brand has a communication tone of voice of "{}", a brand name of "{}", brand pillars of \
\n"{}",\
\n"{}",\
\n"{}",\
\n"{}"\
\nAnd a mission statement of "{}"\
\n\nThe definition of a tagline is a short sentence or phrase that sums up what your brand is all about, reflecting your company values and providing a differentiating identity and personality.\
\n\nReturn as json format.'

def call_gpt (prompt):
    retry_count = 8
    while retry_count > 0:
        try:
            response = openai.Completion.create(
                model="text-davinci-003",
                prompt=prompt,
                temperature=0,
                max_tokens=500)
            return response['choices'][0]['text']
        except Exception as e:
            print(e)
            retry_count -= 1
            # time.sleep(5)
    return "Some Error Occured"
def validate_event(event):
    prompt_type = event['arguments']['data']['prompType']
    if prompt_type == "BRAND_NAME_REFRESH" and not event['arguments']['data']['brandName'] and\
        not event['arguments']['data']['businessDescription'] and\
        not event['arguments']['data']['toneOfVoice']: 
        return False
    if prompt_type == "BRAND_NAME" and not event['arguments']['data']['businessDescription'] and\
         not event['arguments']['data']['toneOfVoice']: 
        return False 
    if prompt_type == "BRAND_PILLARS" and not event['arguments']['data']['businessDescription']\
        and not event['arguments']['data']['toneOfVoice']\
        and not event['arguments']['data']['brandName']:
        return False 
    if prompt_type == "BRAND_VALUES" and not event['arguments']['data']['businessDescription']\
        and not event['arguments']['data']['toneOfVoice']\
        and not event['arguments']['data']['brandName']:
        return False 
    if prompt_type == "BRAND_MISION_STATEMENT" and not event['arguments']['data']['businessDescription']\
        and not event['arguments']['data']['toneOfVoice']\
        and not event['arguments']['data']['brandName']\
        and not event['arguments']['data']['brandPillars']:
        return False 
    if prompt_type == "BRAND_TAGLINE_STATEMENT" and not event['arguments']['data']['businessDescription']\
        and not event['arguments']['data']['toneOfVoice']\
        and not event['arguments']['data']['brandName']\
        and not event['arguments']['data']['brandPillars']\
        and not event['arguments']['data']['brandMissionStatement']:
        return False 
    return True
def parse_brand_name_output(data: str, refresh=False):
    ret =[]
    if refresh:
        data = data.replace("bot","")
    for each in data.split(','):
        each = each.strip()
        if each:
            ret.append(each)
    return ret

def parse_gpt_output(data: str, refresh=False):
    return data.replace("\n","")
def get_gpt_response (event_data):
    prompType = event_data['prompType']
    context = event_data['context'] if 'context' in event_data else None
    business_description = event_data['businessDescription'] if 'businessDescription' in event_data else None
    toneOf_voice = event_data['toneOfVoice'] if 'toneOfVoice' in event_data else None
    brand_name = event_data['brandName'] if 'brandName' in event_data else None
    brand_pillars = event_data['brandPillars'] if 'brandPillars' in event_data else None
    brand_values = event_data['brandValues'] if 'brandValues' in event_data else None
    brand_mision_statement = event_data['brandMissionStatement'] if 'brandMissionStatement' in event_data else None

    if prompType == "BRAND_NAME":
        return parse_gpt_output(call_gpt(BRAND_NAME_PROMPT.format(business_description, toneOf_voice)))
    elif prompType == "BRAND_NAME_REFRESH":
        return parse_gpt_output(call_gpt("User: "+ BRAND_NAME_PROMPT.format(business_description, toneOf_voice) + "\nbot: "+brand_name +"\nUser: Give me more brand names"),True)
    elif prompType == "BRAND_PILLARS":
        return parse_gpt_output(call_gpt(BRAND_PILLARS_PROMPT.format(business_description, toneOf_voice, brand_name)))
    elif prompType == "BRAND_VALUES":
        return parse_gpt_output(call_gpt(BRAND_VALUES_PROMPT.format(business_description, toneOf_voice, brand_name)))
    elif prompType == "BRAND_MISION_STATEMENT":
        return parse_gpt_output(call_gpt(BRAND_MISSION_STATEMENT_PROMPT.format(business_description, toneOf_voice, brand_name, brand_pillars[0], brand_pillars[1],brand_pillars[2],brand_pillars[3])))
    elif prompType == "BRAND_TAGLINE_STATEMENT":
        return parse_gpt_output(call_gpt(BRAND_TAGLINE_STATEMENT_PROMPT.format(business_description, toneOf_voice, brand_name, brand_pillars[0], brand_pillars[1],brand_pillars[2],brand_pillars[3], brand_mision_statement)))

def handler(event, context):
  try:
    if not validate_event(event):
        return {
        'statusCode': 400,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps('Invalid Parameters')
        }

    gpt_res = get_gpt_response(event['arguments']['data'])
    ret = {"error": False}
    print(gpt_res)
    ret[event['arguments']['data']["prompType"]] = gpt_res

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(ret)
    }
  except Exception as e:
    print("Exception : ",e)
    return {
        'statusCode': 500,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps({"error": True, "message": "Something went wrong"})
    }








