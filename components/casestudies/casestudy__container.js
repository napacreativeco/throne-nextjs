import UsalCaseStudy from "./usal";
import SpringCaseStudy from "./spring";
import DominicCaseStudy from "./dominic";
import NappyCaseStudy from "./nappy";
import BighouseCaseStudy from "./bighouse";

export default function CaseStudyContainer(props) {
   
    if (props.clientName == "usal") {
      return <UsalCaseStudy />;
    } else if (props.clientName == "spring") {
        return <SpringCaseStudy />;
    } else if (props.clientName == "dominic") {
        return <DominicCaseStudy />;
    } else if (props.clientName == "nappy") {
        return <NappyCaseStudy />;
    } else if (props.clientName == "bighouse") {
        return <BighouseCaseStudy />;
    }
    return (
        <div></div>
    )
}