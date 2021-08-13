import "./HeroImage.scss";

interface HeroImageProps {
    /** Adds a title to the hero image **/
  title: string;
  /** Adds a Subtitle if required to the hero image **/
  subTitle?: string;
  /** Adds an Image to the hero image **/
  img:string;
   /** Adds an Link button to the hero image **/
  link?: string;
   /** Title for the Link button the hero image **/
  linkTitle?: string;

}
 
export default function HeroImage(props: HeroImageProps) {
  return (
    <>
      <div className="HeroWrapper">
        <div className="HeroWrapper_left">
          <div className="container">
            <div className="HeroWrapper-title">
              <h2>{props.title}</h2>
              {props.subTitle ? (
                <>
                  <h4>{props.subTitle}</h4>{" "}
                </>
              ) : null}
              {props.link ? (
                <>
                  <a className="Button" href={props.link}>
                  {props.linkTitle}
                  </a>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div
          className="HeroWrapper_right"
          style={{ backgroundImage: `url(${props.img})` }}
        >
         
        </div>
      </div>
    </>
  );
}
