export interface IBarCountdown {
  background: string;
  textColor: string;
  backgroundOnHover: string;
  textColorOnHover: string;
  beforeText: string;
  afterText: string;
  enableClose: boolean;
  fontSize: number;
  padding: string;

  enalbeExternalLink: boolean;
  externalLink: string;
}

export interface IButtonCountdown {
  enable: boolean;
  position: string;
  fontSize: number;
  borderRadius: string;
  padding: string;
  externalLink: string;
  content: string;

  background: string;
  textColor: string;
  backgroundOnHover: string;
  textColorOnHover: string;
}

export interface ITimerCountdown {
  background: string;
  textColor: string;
}

export interface ICountdown {
  id: number;
  name: string;
  bar: IBarCountdown;
  btn: IButtonCountdown;
  timer: ITimerCountdown;
}
