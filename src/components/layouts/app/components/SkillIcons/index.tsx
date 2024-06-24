import { cls } from "../../helpers/twind-helpers";

type SkillIconProps = {
  className?: string;
  wrapperClassName?: string;
  style: React.CSSProperties;
};

export function ReactIcon(props: SkillIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("", className ?? "")}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
    </svg>
  );
}

export function CSSIcon(props: SkillIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("", className ?? "")}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
    </svg>
  );
}

export function HTMLIcon(props: SkillIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("", className ?? "")}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
    </svg>
  );
}

export function GitIcon(props: SkillIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("", className ?? "")}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M439.6 236.1L244 40.5a28.9 28.9 0 0 0 -40.8 0l-40.7 40.6 51.5 51.5c27.1-9.1 52.7 16.8 43.4 43.7l49.7 49.7c34.2-11.8 61.2 31 35.5 56.7-26.5 26.5-70.2-2.9-56-37.3L240.2 199v121.9c25.3 12.5 22.3 41.9 9.1 55a34.3 34.3 0 0 1 -48.6 0c-17.6-17.6-11.1-46.9 11.3-56v-123c-20.8-8.5-24.6-30.7-18.6-45L142.6 101 8.5 235.1a28.9 28.9 0 0 0 0 40.8l195.6 195.6a28.9 28.9 0 0 0 40.8 0l194.7-194.7a28.9 28.9 0 0 0 0-40.8z" />
    </svg>
  );
}

export function JavaScriptIcon(props: SkillIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("rounded-sm", className ?? "")}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 220 440 80"
    >
      <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
    </svg>
  );
}

export function DockerIcon(props: SkillIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("", className ?? "")}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4 .4 67.6 .1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z" />
    </svg>
  );
}

export function AWSIcon(props: SkillIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("", className ?? "")}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path d="M180.4 203c-.7 22.7 10.6 32.7 10.9 39.1a8.2 8.2 0 0 1 -4.1 6.3l-12.8 9a10.7 10.7 0 0 1 -5.6 1.9c-.4 0-8.2 1.8-20.5-25.6a78.6 78.6 0 0 1 -62.6 29.5c-16.3 .9-60.4-9.2-58.1-56.2-1.6-38.3 34.1-62.1 70.9-60.1 7.1 0 21.6 .4 47 6.3v-15.6c2.7-26.5-14.7-47-44.8-43.9-2.4 0-19.4-.5-45.8 10.1-7.4 3.4-8.3 2.8-10.8 2.8-7.4 0-4.4-21.5-2.9-24.2 5.2-6.4 35.9-18.4 65.9-18.2a76.9 76.9 0 0 1 55.7 17.3 70.3 70.3 0 0 1 17.7 52.4l0 69.3zM94 235.4c32.4-.5 46.2-20 49.3-30.5 2.5-10.1 2.1-16.4 2.1-27.4-9.7-2.3-23.6-4.9-39.6-4.9-15.2-1.1-42.8 5.6-41.7 32.3-1.2 16.8 11.1 31.4 30 30.5zm170.9 23.1c-7.9 .7-11.5-4.9-12.7-10.4l-49.8-164.7c-1-2.8-1.6-5.7-1.9-8.6a4.6 4.6 0 0 1 3.9-5.3c.2 0-2.1 0 22.3 0 8.8-.9 11.6 6 12.6 10.4l35.7 140.8 33.2-140.8c.5-3.2 2.9-11.1 12.8-10.2h17.2c2.2-.2 11.1-.5 12.7 10.4l33.4 142.6L421 80.1c.5-2.2 2.7-11.4 12.7-10.4h19.7c.9-.1 6.2-.8 5.3 8.6-.4 1.9 3.4-10.7-52.8 169.9-1.2 5.5-4.8 11.1-12.7 10.4h-18.7c-10.9 1.2-12.5-9.7-12.7-10.8L328.7 110.7l-32.8 137c-.2 1.1-1.7 11.9-12.7 10.8h-18.3zm273.5 5.6c-5.9 0-33.9-.3-57.4-12.3a12.8 12.8 0 0 1 -7.8-11.9v-10.8c0-8.5 6.2-6.9 8.8-5.9 10 4.1 16.5 7.1 28.8 9.6 36.7 7.5 52.8-2.3 56.7-4.5 13.2-7.8 14.2-25.7 5.3-35-10.5-8.8-15.5-9.1-53.1-21-4.6-1.3-43.7-13.6-43.8-52.4-.6-28.2 25.1-56.2 69.5-56 12.7 0 46.4 4.1 55.6 15.6 1.4 2.1 2 4.6 1.9 7v10.1c0 4.4-1.6 6.7-4.9 6.7-7.7-.9-21.4-11.2-49.2-10.8-6.9-.4-39.9 .9-38.4 25-.4 19 26.6 26.1 29.7 26.9 36.5 11 48.7 12.8 63.1 29.6 17.1 22.3 7.9 48.3 4.4 55.4-19.1 37.5-68.4 34.4-69.3 34.4zm40.2 104.9c-70 51.7-171.7 79.3-258.5 79.3A469.1 469.1 0 0 1 2.8 327.5c-6.5-5.9-.8-14 7.2-9.5a637.4 637.4 0 0 0 316.9 84.1 630.2 630.2 0 0 0 241.6-49.6c11.8-5 21.8 7.8 10.1 16.4zm29.2-33.3c-9-11.5-59.3-5.4-81.8-2.7-6.8 .8-7.9-5.1-1.8-9.5 40.1-28.2 105.9-20.1 113.4-10.6 7.6 9.5-2.1 75.4-39.6 106.9-5.8 4.9-11.3 2.3-8.7-4.1 8.4-21.3 27.4-68.5 18.4-80z" />
    </svg>
  );
}

export function NodeJSIcon(props: SkillIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("", className ?? "")}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6 .4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2 .7 376.3 .7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8 .5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" />
    </svg>
  );
}

export function LinuxIcon(props: SkillIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("", className ?? "")}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M220.8 123.3c1 .5 1.8 1.7 3 1.7 1.1 0 2.8-.4 2.9-1.5 .2-1.4-1.9-2.3-3.2-2.9-1.7-.7-3.9-1-5.5-.1-.4 .2-.8 .7-.6 1.1 .3 1.3 2.3 1.1 3.4 1.7zm-21.9 1.7c1.2 0 2-1.2 3-1.7 1.1-.6 3.1-.4 3.5-1.6 .2-.4-.2-.9-.6-1.1-1.6-.9-3.8-.6-5.5 .1-1.3 .6-3.4 1.5-3.2 2.9 .1 1 1.8 1.5 2.8 1.4zM420 403.8c-3.6-4-5.3-11.6-7.2-19.7-1.8-8.1-3.9-16.8-10.5-22.4-1.3-1.1-2.6-2.1-4-2.9-1.3-.8-2.7-1.5-4.1-2 9.2-27.3 5.6-54.5-3.7-79.1-11.4-30.1-31.3-56.4-46.5-74.4-17.1-21.5-33.7-41.9-33.4-72C311.1 85.4 315.7 .1 234.8 0 132.4-.2 158 103.4 156.9 135.2c-1.7 23.4-6.4 41.8-22.5 64.7-18.9 22.5-45.5 58.8-58.1 96.7-6 17.9-8.8 36.1-6.2 53.3-6.5 5.8-11.4 14.7-16.6 20.2-4.2 4.3-10.3 5.9-17 8.3s-14 6-18.5 14.5c-2.1 3.9-2.8 8.1-2.8 12.4 0 3.9 .6 7.9 1.2 11.8 1.2 8.1 2.5 15.7 .8 20.8-5.2 14.4-5.9 24.4-2.2 31.7 3.8 7.3 11.4 10.5 20.1 12.3 17.3 3.6 40.8 2.7 59.3 12.5 19.8 10.4 39.9 14.1 55.9 10.4 11.6-2.6 21.1-9.6 25.9-20.2 12.5-.1 26.3-5.4 48.3-6.6 14.9-1.2 33.6 5.3 55.1 4.1 .6 2.3 1.4 4.6 2.5 6.7v.1c8.3 16.7 23.8 24.3 40.3 23 16.6-1.3 34.1-11 48.3-27.9 13.6-16.4 36-23.2 50.9-32.2 7.4-4.5 13.4-10.1 13.9-18.3 .4-8.2-4.4-17.3-15.5-29.7zM223.7 87.3c9.8-22.2 34.2-21.8 44-.4 6.5 14.2 3.6 30.9-4.3 40.4-1.6-.8-5.9-2.6-12.6-4.9 1.1-1.2 3.1-2.7 3.9-4.6 4.8-11.8-.2-27-9.1-27.3-7.3-.5-13.9 10.8-11.8 23-4.1-2-9.4-3.5-13-4.4-1-6.9-.3-14.6 2.9-21.8zM183 75.8c10.1 0 20.8 14.2 19.1 33.5-3.5 1-7.1 2.5-10.2 4.6 1.2-8.9-3.3-20.1-9.6-19.6-8.4 .7-9.8 21.2-1.8 28.1 1 .8 1.9-.2-5.9 5.5-15.6-14.6-10.5-52.1 8.4-52.1zm-13.6 60.7c6.2-4.6 13.6-10 14.1-10.5 4.7-4.4 13.5-14.2 27.9-14.2 7.1 0 15.6 2.3 25.9 8.9 6.3 4.1 11.3 4.4 22.6 9.3 8.4 3.5 13.7 9.7 10.5 18.2-2.6 7.1-11 14.4-22.7 18.1-11.1 3.6-19.8 16-38.2 14.9-3.9-.2-7-1-9.6-2.1-8-3.5-12.2-10.4-20-15-8.6-4.8-13.2-10.4-14.7-15.3-1.4-4.9 0-9 4.2-12.3zm3.3 334c-2.7 35.1-43.9 34.4-75.3 18-29.9-15.8-68.6-6.5-76.5-21.9-2.4-4.7-2.4-12.7 2.6-26.4v-.2c2.4-7.6 .6-16-.6-23.9-1.2-7.8-1.8-15 .9-20 3.5-6.7 8.5-9.1 14.8-11.3 10.3-3.7 11.8-3.4 19.6-9.9 5.5-5.7 9.5-12.9 14.3-18 5.1-5.5 10-8.1 17.7-6.9 8.1 1.2 15.1 6.8 21.9 16l19.6 35.6c9.5 19.9 43.1 48.4 41 68.9zm-1.4-25.9c-4.1-6.6-9.6-13.6-14.4-19.6 7.1 0 14.2-2.2 16.7-8.9 2.3-6.2 0-14.9-7.4-24.9-13.5-18.2-38.3-32.5-38.3-32.5-13.5-8.4-21.1-18.7-24.6-29.9s-3-23.3-.3-35.2c5.2-22.9 18.6-45.2 27.2-59.2 2.3-1.7 .8 3.2-8.7 20.8-8.5 16.1-24.4 53.3-2.6 82.4 .6-20.7 5.5-41.8 13.8-61.5 12-27.4 37.3-74.9 39.3-112.7 1.1 .8 4.6 3.2 6.2 4.1 4.6 2.7 8.1 6.7 12.6 10.3 12.4 10 28.5 9.2 42.4 1.2 6.2-3.5 11.2-7.5 15.9-9 9.9-3.1 17.8-8.6 22.3-15 7.7 30.4 25.7 74.3 37.2 95.7 6.1 11.4 18.3 35.5 23.6 64.6 3.3-.1 7 .4 10.9 1.4 13.8-35.7-11.7-74.2-23.3-84.9-4.7-4.6-4.9-6.6-2.6-6.5 12.6 11.2 29.2 33.7 35.2 59 2.8 11.6 3.3 23.7 .4 35.7 16.4 6.8 35.9 17.9 30.7 34.8-2.2-.1-3.2 0-4.2 0 3.2-10.1-3.9-17.6-22.8-26.1-19.6-8.6-36-8.6-38.3 12.5-12.1 4.2-18.3 14.7-21.4 27.3-2.8 11.2-3.6 24.7-4.4 39.9-.5 7.7-3.6 18-6.8 29-32.1 22.9-76.7 32.9-114.3 7.2zm257.4-11.5c-.9 16.8-41.2 19.9-63.2 46.5-13.2 15.7-29.4 24.4-43.6 25.5s-26.5-4.8-33.7-19.3c-4.7-11.1-2.4-23.1 1.1-36.3 3.7-14.2 9.2-28.8 9.9-40.6 .8-15.2 1.7-28.5 4.2-38.7 2.6-10.3 6.6-17.2 13.7-21.1 .3-.2 .7-.3 1-.5 .8 13.2 7.3 26.6 18.8 29.5 12.6 3.3 30.7-7.5 38.4-16.3 9-.3 15.7-.9 22.6 5.1 9.9 8.5 7.1 30.3 17.1 41.6 10.6 11.6 14 19.5 13.7 24.6zM173.3 148.7c2 1.9 4.7 4.5 8 7.1 6.6 5.2 15.8 10.6 27.3 10.6 11.6 0 22.5-5.9 31.8-10.8 4.9-2.6 10.9-7 14.8-10.4s5.9-6.3 3.1-6.6-2.6 2.6-6 5.1c-4.4 3.2-9.7 7.4-13.9 9.8-7.4 4.2-19.5 10.2-29.9 10.2s-18.7-4.8-24.9-9.7c-3.1-2.5-5.7-5-7.7-6.9-1.5-1.4-1.9-4.6-4.3-4.9-1.4-.1-1.8 3.7 1.7 6.5z" />
    </svg>
  );
}

export function PythonIcon(props: SkillIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("", className ?? "")}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4 .1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8 .1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3 .1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z" />
    </svg>
  );
}

export function StripePayIcon(props: SkillIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("", className ?? "")}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
    >
      <path d="M165 144.7l-43.3 9.2-.2 142.4c0 26.3 19.8 43.3 46.1 43.3 14.6 0 25.3-2.7 31.2-5.9v-33.8c-5.7 2.3-33.7 10.5-33.7-15.7V221h33.7v-37.8h-33.7zm89.1 51.6l-2.7-13.1H213v153.2h44.3V233.3c10.5-13.8 28.2-11.1 33.9-9.3v-40.8c-6-2.1-26.7-6-37.1 13.1zm92.3-72.3l-44.6 9.5v36.2l44.6-9.5zM44.9 228.3c0-6.9 5.8-9.6 15.1-9.7 13.5 0 30.7 4.1 44.2 11.4v-41.8c-14.7-5.8-29.4-8.1-44.1-8.1-36 0-60 18.8-60 50.2 0 49.2 67.5 41.2 67.5 62.4 0 8.2-7.1 10.9-17 10.9-14.7 0-33.7-6.1-48.6-14.2v40c16.5 7.1 33.2 10.1 48.5 10.1 36.9 0 62.3-15.8 62.3-47.8 0-52.9-67.9-43.4-67.9-63.4zM640 261.6c0-45.5-22-81.4-64.2-81.4s-67.9 35.9-67.9 81.1c0 53.5 30.3 78.2 73.5 78.2 21.2 0 37.1-4.8 49.2-11.5v-33.4c-12.1 6.1-26 9.8-43.6 9.8-17.3 0-32.5-6.1-34.5-26.9h86.9c.2-2.3 .6-11.6 .6-15.9zm-87.9-16.8c0-20 12.3-28.4 23.4-28.4 10.9 0 22.5 8.4 22.5 28.4zm-112.9-64.6c-17.4 0-28.6 8.2-34.8 13.9l-2.3-11H363v204.8l44.4-9.4 .1-50.2c6.4 4.7 15.9 11.2 31.4 11.2 31.8 0 60.8-23.2 60.8-79.6 .1-51.6-29.3-79.7-60.5-79.7zm-10.6 122.5c-10.4 0-16.6-3.8-20.9-8.4l-.3-66c4.6-5.1 11-8.8 21.2-8.8 16.2 0 27.4 18.2 27.4 41.4 .1 23.9-10.9 41.8-27.4 41.8zm-126.7 33.7h44.6V183.2h-44.6z" />
    </svg>
  );
}

//  Non FontAwesome Icons
export function TypeScriptIcon(props: SkillIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      {...rest}
      className={cls("rounded-sm", className ?? "")}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#9061ff"
      strokeWidth="0"
      viewBox="0 0 24 24"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.048"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z"></path>
      </g>
    </svg>
  );
}

export function NestJSIcon(props: SkillIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("", className ?? "")}
      {...rest}
      viewBox="6.006 4.24 275.796 249.238"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m153.338 4.24c-1.809 0-3.489.388-5.04.905 3.296 2.197 5.105 5.105 6.01 8.4.065.453.194.776.258 1.228.065.388.13.775.13 1.163.258 5.687-1.487 6.397-2.715 9.758-1.874 4.33-1.357 8.982.905 12.73.194.452.452.969.776 1.421-2.456-16.348 11.179-18.804 13.699-23.909.194-4.459-3.49-7.431-6.397-9.499-2.78-1.68-5.3-2.197-7.626-2.197zm20.55 3.683c-.26 1.487-.065 1.099-.13 1.874-.064.517-.064 1.163-.129 1.68-.129.517-.258 1.034-.452 1.551-.13.517-.323 1.034-.517 1.551-.259.517-.452.97-.71 1.486-.195.259-.324.517-.518.776l-.388.581c-.323.453-.646.905-.969 1.293-.388.388-.71.84-1.163 1.163v.065c-.388.323-.775.71-1.228 1.034-1.357 1.033-2.908 1.809-4.33 2.778-.452.323-.904.582-1.292.97-.452.323-.84.646-1.227 1.033-.453.388-.776.776-1.164 1.228-.323.388-.71.84-.969 1.293-.323.452-.646.904-.905 1.357-.258.517-.452.969-.71 1.486-.194.517-.388.97-.517 1.486a20.921 20.921 0 0 0 -.453 1.616c-.064.258-.064.581-.129.84-.065.258-.065.517-.129.775 0 .517-.065 1.099-.065 1.616 0 .387 0 .775.065 1.163 0 .517.065 1.034.194 1.615.065.517.194 1.034.323 1.551.194.517.323 1.034.517 1.55.13.324.323.647.452.906l-14.862-5.752c-2.52-.71-4.976-1.357-7.496-1.938l-4.071-.97a119.971 119.971 0 0 0 -11.76-1.744c-.13 0-.195-.065-.324-.065-3.877-.388-7.69-.581-11.567-.581-2.843 0-5.686.129-8.465.323-3.942.258-7.884.775-11.825 1.421-.97.13-1.94.323-2.908.517-2.004.388-3.942.84-5.816 1.293l-2.908.775c-.97.388-1.874.84-2.779 1.228l-2.132.97c-.13.064-.259.064-.323.128-.646.323-1.228.582-1.81.905-.193.065-.323.13-.452.194-.71.323-1.421.71-2.003 1.034-.452.194-.905.452-1.292.646-.194.13-.453.259-.582.323-.582.323-1.163.646-1.68.97-.582.322-1.099.646-1.551.969s-.905.581-1.292.904c-.065.065-.13.065-.194.13-.388.258-.84.581-1.228.904l-.13.13-.968.775c-.13.064-.26.194-.388.258-.323.259-.646.582-.97.84-.064.13-.193.194-.258.259-.388.388-.775.71-1.163 1.098-.065 0-.065.065-.13.13-.387.323-.775.71-1.163 1.098-.064.065-.064.13-.129.13a15.16 15.16 0 0 0 -.969 1.033c-.13.13-.323.259-.452.388-.323.388-.711.775-1.099 1.163-.065.13-.194.194-.258.323-.517.517-.97 1.034-1.487 1.551l-.193.194c-1.034 1.098-2.133 2.197-3.296 3.166a36.732 36.732 0 0 1 -3.619 2.843 48.856 48.856 0 0 1 -3.877 2.456 39.382 39.382 0 0 1 -4.071 1.939 46.55 46.55 0 0 1 -4.2 1.55c-2.714.582-5.493 1.68-7.884 1.874-.517 0-1.098.13-1.615.194-.582.13-1.099.259-1.616.388l-1.55.582c-.518.193-1.035.452-1.552.71-.452.323-.969.582-1.421.905-.453.323-.905.71-1.293 1.099-.452.323-.904.775-1.292 1.163-.388.452-.775.84-1.099 1.292-.323.517-.71.97-.969 1.486-.323.453-.646.97-.904 1.487-.26.581-.517 1.098-.711 1.68a49.803 49.803 0 0 0 -.582 1.68c-.129.517-.258 1.034-.323 1.55 0 .066-.065.13-.065.195-.129.581-.129 1.357-.194 1.744-.064.453-.129.84-.129 1.293 0 .258 0 .581.065.84.065.452.13.84.259 1.228.129.387.258.775.452 1.163v.064c.194.388.452.776.71 1.164.26.387.518.775.84 1.163.324.323.712.71 1.1 1.034.387.387.775.71 1.227 1.034 1.551 1.357 1.939 1.809 3.942 2.843.323.194.646.323 1.034.517.065 0 .129.064.194.064 0 .13 0 .194.064.324.065.517.194 1.034.324 1.55a8.71 8.71 0 0 0 .516 1.551c.194.388.324.776.517 1.164.065.129.13.258.194.323.259.517.517.969.776 1.421l.969 1.357c.323.388.71.84 1.099 1.228.387.388.775.71 1.227 1.099 0 0 .065.064.13.064.387.323.775.647 1.163.905.452.323.904.582 1.421.84.453.259.97.517 1.487.71.387.195.84.324 1.292.453.065.065.129.065.258.13.26.064.582.129.84.193-.193 3.49-.258 6.785.26 7.948.58 1.293 3.424-2.649 6.267-7.172-.388 4.458-.646 9.693 0 11.243.711 1.616 4.588-3.424 7.948-8.982 45.816-10.597 87.625 21.067 92.019 65.783-.84-6.979-9.435-10.856-13.377-9.887-1.938 4.782-5.234 10.921-10.533 14.734a41.434 41.434 0 0 0 -.646-12.924c-1.421 5.945-4.2 11.502-8.013 16.284-6.138.452-12.277-2.52-15.508-6.98-.259-.193-.323-.58-.517-.84-.194-.452-.388-.904-.517-1.356a5.365 5.365 0 0 1 -.388-1.357c-.065-.453-.065-.905-.065-1.422v-.97c.065-.452.194-.904.323-1.356.13-.453.259-.905.453-1.357.258-.453.452-.905.775-1.357 1.099-3.102 1.099-5.622-.904-7.108a7.36 7.36 0 0 0 -1.228-.647c-.259-.064-.582-.193-.84-.258-.194-.065-.323-.13-.517-.194-.453-.13-.905-.259-1.357-.323a4.923 4.923 0 0 0 -1.357-.194c-.453-.065-.97-.13-1.422-.13-.323 0-.646.066-.97.066-.516 0-.968.064-1.42.193-.453.065-.905.13-1.358.259-.452.13-.905.259-1.357.452-.452.194-.84.388-1.292.582-.388.194-.776.452-1.228.646-15.056 9.822-6.074 32.827 4.2 39.483-3.877.71-7.819 1.55-8.917 2.39l-.13.13c2.78 1.68 5.687 3.102 8.724 4.33 4.136 1.356 8.53 2.584 10.469 3.101v.065a62.516 62.516 0 0 0 16.284 1.163c28.626-2.003 52.083-23.78 56.348-52.471.13.581.259 1.098.388 1.68.194 1.163.452 2.39.581 3.619v.064c.13.582.194 1.164.259 1.68v.26c.065.58.13 1.162.13 1.68.064.71.128 1.42.128 2.132v1.034c0 .323.065.71.065 1.033 0 .388-.065.776-.065 1.164v.904c0 .453-.065.84-.065 1.293 0 .258 0 .517-.064.84 0 .452-.065.904-.065 1.421-.065.194-.065.388-.065.582-.064.517-.129.97-.194 1.486 0 .194 0 .388-.064.582-.065.646-.194 1.228-.259 1.874v.129c-.129.582-.258 1.228-.388 1.81v.193l-.387 1.745c0 .065-.065.194-.065.259-.13.581-.259 1.163-.452 1.744v.194c-.194.647-.388 1.228-.517 1.81-.065.064-.065.129-.065.129l-.582 1.938c-.258.647-.452 1.228-.71 1.874-.259.647-.453 1.293-.711 1.874-.259.647-.517 1.228-.776 1.874h-.064c-.26.582-.517 1.228-.84 1.81-.065.194-.13.323-.194.452-.065.065-.065.13-.13.194-4.2 8.465-10.403 15.896-18.158 21.712-.517.323-1.034.71-1.55 1.099-.13.129-.324.193-.453.323-.452.323-.905.646-1.421.969l.193.388h.065l2.714-.388h.065c1.68-.259 3.36-.582 5.04-.905.452-.065.97-.194 1.422-.323.323-.065.581-.129.904-.194.453-.064.905-.194 1.357-.258.388-.13.776-.194 1.164-.323 6.462-1.551 12.73-3.684 18.74-6.204-10.275 14.023-24.04 25.331-40.13 32.762 7.432-.517 14.863-1.744 22.036-3.812 26.042-7.69 47.948-25.202 61.065-48.788a103.145 103.145 0 0 1 -17.382 41.55 101.732 101.732 0 0 0 17.253-14.345c14.475-15.121 23.974-34.313 27.205-54.927a102.9 102.9 0 0 1 1.874 31.147c46.655-65.072 3.877-132.535-14.023-150.305-.064-.13-.129-.194-.129-.323-.064.064-.064.064-.064.129 0-.065 0-.065-.065-.13 0 .776-.065 1.551-.13 2.327-.193 1.486-.387 2.908-.646 4.33-.323 1.421-.71 2.843-1.098 4.264a53.747 53.747 0 0 1 -1.55 4.136 55.49 55.49 0 0 1 -1.94 3.942c-.71 1.227-1.486 2.52-2.326 3.683a49.368 49.368 0 0 1 -2.65 3.49c-.969 1.163-2.002 2.197-3.036 3.23a41.646 41.646 0 0 1 -1.874 1.616c-.517.452-.97.84-1.487 1.292-1.163.905-2.326 1.745-3.618 2.52-1.228.776-2.52 1.551-3.813 2.198-1.357.646-2.714 1.227-4.07 1.809-1.358.517-2.78.97-4.201 1.357a52.05 52.05 0 0 1 -4.33.97c-1.486.258-2.972.387-4.394.516-1.034.065-2.068.13-3.102.13-1.486 0-2.972-.13-4.394-.26-1.486-.128-2.972-.322-4.394-.645-1.486-.26-2.908-.647-4.33-1.099h-.064c1.422-.13 2.843-.259 4.265-.517a46.84 46.84 0 0 0 4.33-.97 45.495 45.495 0 0 0 4.2-1.356c1.421-.517 2.778-1.163 4.07-1.81 1.358-.646 2.586-1.357 3.878-2.132 1.228-.84 2.455-1.68 3.619-2.585a35.333 35.333 0 0 0 3.295-2.908c1.099-.97 2.068-2.068 3.037-3.166a63.86 63.86 0 0 0 2.714-3.49c.13-.193.259-.452.388-.646.646-1.034 1.292-2.068 1.874-3.102a44.537 44.537 0 0 0 1.939-3.941 45.28 45.28 0 0 0 1.55-4.136c.453-1.357.776-2.779 1.099-4.2.259-1.486.517-2.908.646-4.33.13-1.486.259-2.972.259-4.394 0-1.034-.065-2.068-.13-3.102-.128-1.486-.322-2.907-.516-4.33a46.844 46.844 0 0 0 -.97-4.329c-.452-1.357-.904-2.778-1.421-4.135s-1.163-2.714-1.81-4.007c-.71-1.292-1.421-2.584-2.197-3.812a71.347 71.347 0 0 0 -2.584-3.554 136.72 136.72 0 0 0 -2.973-3.296 40.422 40.422 0 0 0 -1.68-1.615 118.979 118.979 0 0 0 -8.982-6.333c-.452-.259-.84-.452-1.293-.646-2.132-1.357-4.135-2.068-6.138-2.714z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function NextJSIcon(props: SkillIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("", className ?? "")}
      {...rest}
      viewBox="0 0 256 256"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"></path>
      </g>
    </svg>
  );
}

export function TailwindIcon(props: SkillIconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("", className ?? "")}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 54 33"
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          fillRule="evenodd"
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path d="M0 0h54v32.4H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
