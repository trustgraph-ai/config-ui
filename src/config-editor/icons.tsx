
import {
    Psychology,
    Engineering,
    Hub,
    ChatBubble,
    VerticalSplit,
    MonitorHeart,
    Polyline,
} from '@mui/icons-material';

const fontSize = "large";

export const icons : { [key : string] : JSX.Element } = {
    "llm": <Psychology fontSize={fontSize}/>,
    "foundation": <Engineering fontSize={fontSize}/>,
    "knowledge-graph": <Hub fontSize={fontSize}/>,
    "prompting": <ChatBubble fontSize={fontSize}/>,
    "chunking": <VerticalSplit fontSize={fontSize}/>,
    "monitoring": <MonitorHeart fontSize={fontSize}/>,
    "vector-store": <Polyline fontSize={fontSize}/>,
};

export const getIcon = (icon : string) : JSX.Element => {
   return icons[icon];
};

