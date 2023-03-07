import "./brandDescription.css";

/* eslint-disable max-len */
export default function BrandDesciption() {
  return (
    <div className="brand-brief-details-container">
      <div className="brand-brief-title brand-sub-description-margin">
        Brand brief details
      </div>
      <div className="brand-sub-description brand-sub-description-margin">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit
        amet maximus libero, eu dictum tellus. Donec mollis imperdiet turpis,
        vitae hendrerit leo dictum at. Nullam lorem libero, pellentesque ac
        viverra nec, tempor id quam. Mauris leo lectus, rutrum a nunc non,
        porttitor ornare dui. Integer ac tristique purus.
      </div>

      <div className="brand-content-container brand-sub-description brand-sub-description-margin">
        <div>
          &#x2022;{" "}
          {
            "In rutrum ornare hendrerit. Donec dignissim justo a tellus sagittis molestie. "
          }
        </div>
        <div>
          &#x2022;{" "}
          {
            "Suspendisse tincidunt, sem sollicitudin convallis gravida, magna enim pellentesque lacus, ac finibus orci ipsum sed lacus. Donec scelerisque a purus nec posuere. "
          }
        </div>
        <div>
          &#x2022;{" "}
          {
            "Nam suscipit mauris vel urna mattis, in auctor massa volutpat. Vestibulum elementum molestie sapien at congue. "
          }
        </div>
      </div>

      <div className="brand-sub-description">
        Nam accumsan convallis nunc sit amet semper. Curabitur sit amet erat
        justo.
      </div>

      <div className="link-creative-btn-container">
        <div className="link-creative-btn">
          <span className="link-creative-text">Link Creative</span>
        </div>
      </div>
    </div>
  );
}
