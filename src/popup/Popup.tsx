import * as React from "react";

export function Popup() {
    // Sends the `popupMounted` event

    React.useEffect(() => {
        if (chrome.tabs) {
            chrome.runtime.sendMessage({ popupMounted: true });
        }
    }, []);

    // Renders the component tree
    return <div>hello Extension</div>;
}
