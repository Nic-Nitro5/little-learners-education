import type { IconType } from "react-icons";
import Magnetic from "./Magnetic";
import { CONTACT_EMAIL } from "../lib/site";

type EmailCTAButtonProps = {
  label: string;
  icon?: IconType;
  className: string;
  wrapperClassName?: string;
};

export default function EmailCTAButton({
  label,
  icon: Icon,
  className,
  wrapperClassName = "inline-block",
}: EmailCTAButtonProps) {
  return (
    <Magnetic className={wrapperClassName}>
      <a href={`mailto:${CONTACT_EMAIL}`} className={className}>
        {Icon && <Icon size={16} aria-hidden="true" />}
        {label}
      </a>
    </Magnetic>
  );
}
