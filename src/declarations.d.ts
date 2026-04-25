declare module "*.mp3" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.ico" {
  const src: string;
  export default src;
}

declare module "*.css" {}

declare module "use-sound" {
  type PlayFunction = () => void;
  interface ExposedData {
    stop: () => void;
  }
  interface HookOptions {
    volume?: number;
    loop?: boolean;
  }
  export default function useSound(
    src: string,
    options?: HookOptions
  ): [PlayFunction, ExposedData];
}
