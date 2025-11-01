"use client";

import { useEffect } from "react";
import { meet } from "@googleworkspace/meet-addons/meet.addons";

export default function MainTemplate() {
    useEffect(() => {
        (async () => {
            const session = await meet.addon.createAddonSession({
                cloudProjectNumber: "CLOUD_PROJECT_NUMBER",
            });
            await session.createMainStageClient();
        })();
    }, []);

    return (
        <>
            <div>
                This is the add-on Main Stage. Everyone in the call can see
                this.
            </div>
            <div>Hello, world!</div>
        </>
    );
}
