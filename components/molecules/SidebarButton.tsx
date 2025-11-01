"use client";
import { meet, MeetSidePanelClient } from "@googleworkspace/meet-addons";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Sidebar } from "lucide-react";

const SidebarButton: React.FC = () => {
    const [sidePanelClient, setSidePanelClient] =
        useState<MeetSidePanelClient>();
    // Launches the main stage when the main button is clicked.
    async function startActivity(e: unknown) {
        if (!sidePanelClient) {
            throw new Error("Side Panel is not yet initialized!");
        }
        await sidePanelClient.startActivity({
            mainStageUrl: process.env.MAIN_STAGE_URL!,
        });
    }

    useEffect(() => {
        (async () => {
            const session = await meet.addon.createAddonSession({
                cloudProjectNumber: process.env.CLOUD_PROJECT_NUMBER!,
            });
            setSidePanelClient(await session.createSidePanelClient());
        })();
    }, []);

    return (
        <div>
            <div>This is the add-on Side Panel. Only you can see this.</div>
            <Button onClick={startActivity}>sad</Button>
        </div>
    );
};

export default SidebarButton;
