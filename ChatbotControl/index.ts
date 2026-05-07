import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class ChatbotControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private container: HTMLDivElement;
    private iframe: HTMLIFrameElement;

    constructor() {
        // Required constructor
    }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {

        this.container = container;

        // Make container fill Power Apps control
        this.container.style.width = "100%";
        this.container.style.height = "100%";
        this.container.style.overflow = "hidden";

        // Create iframe ONLY ONCE (important fix)
        this.iframe = document.createElement("iframe");

        this.iframe.src = "https://share.chatling.ai/s/PjD8JKwqYbE7ELC";
        this.iframe.style.width = "100%";
        this.iframe.style.height = "100%";
        this.iframe.style.border = "none";

        this.container.appendChild(this.iframe);
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        // ❌ DO NOT clear container here
        // If you clear, chatbot reloads → messages disappear
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        // Clean up iframe
        if (this.iframe) {
            this.iframe.remove();
        }
    }
}