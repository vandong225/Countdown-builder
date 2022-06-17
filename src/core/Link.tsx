import { Link as ReactRouterLink } from "react-router-dom";

type TProps = {
  url: string;
  external?: boolean;
};

const Link: React.FC<TProps> = ({ url, external, children, ...rest }) => {
  if (external) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <ReactRouterLink to={url} {...rest}>
      {children}
    </ReactRouterLink>
  );
};

export default Link;
