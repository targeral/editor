import * as React from 'react';

interface IconProps {
  width: number,
  height: number,
  type: String
};

class Icon extends React.Component<IconProps, {}> {
  static defaultProps = {
    width: 16,
    height: 16
  };

  public render() {
    let { width, height, type: id} = this.props;
    return (
      <svg
        width={width}
        height={height}
      >
        <use xlinkHref={`#${id}`} />
      </svg>
    );
  }
}

export default Icon;
