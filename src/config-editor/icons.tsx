
import {
    Psychology,
    Spoke,
    Plumbing,
    Engineering,
    Hub,
    ChatBubble,
    VerticalSplit,
    MonitorHeart,
    Polyline,
} from '@mui/icons-material';

const fontSize = "large";

export const icons : { [key : string] : JSX.Element } = {
    "llm": <Psychology color="primary" fontSize={fontSize}/>,
    "processing": <Plumbing color="primary" fontSize={fontSize}/>,
    "embeddings": <Spoke color="primary" fontSize={fontSize}/>,
    "foundation": <Engineering color="primary"  fontSize={fontSize}/>,
    "knowledge-graph": <Hub color="primary"  fontSize={fontSize}/>,
    "prompting": <ChatBubble color="primary"  fontSize={fontSize}/>,
    "chunking": <VerticalSplit color="primary"  fontSize={fontSize}/>,
    "monitoring": <MonitorHeart color="primary"  fontSize={fontSize}/>,
    "vector-store": <Polyline color="primary"  fontSize={fontSize}/>,
};

export const getIcon = (icon : string) : JSX.Element => {
   return icons[icon];
};

