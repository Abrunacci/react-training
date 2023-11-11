import Welcome from "./Welcome.jsx";
import Code from "./Code.jsx";

export default function ConditionalComponent() {

    const display = false;

    return display ? <Code /> : <Welcome />;
};