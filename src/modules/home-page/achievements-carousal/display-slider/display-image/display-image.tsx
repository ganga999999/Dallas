import { Component, ReactNode } from "react";
import styles from "./display-image.module.scss";
import {
  IDisplayImageProps,
  IDisplayImageStates,
} from "./display-image.constants";
import { motion } from "framer-motion";

class DisplayImage extends Component<IDisplayImageProps, IDisplayImageStates> {
  constructor(props: IDisplayImageProps) {
    super(props);
    this.state = {
      isInView: false,
    };
  }
  componentDidUpdate(
    prevProps: Readonly<IDisplayImageProps>,
    prevState: Readonly<IDisplayImageStates>
  ): void {
    if (prevProps.isActive !== this.props.isActive) {
      this.setState({ isInView: false });
    }
  }
  render(): ReactNode {
    const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
    const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
    const { image, isActive } = this.props;
    return isActive ? (
      <motion.img
        className={styles.displayImg}
        src={image}
        initial={false}
        animate={
          this.state.isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => this.setState({ isInView: true })}
      />
    ) : null;
  }
}

export default DisplayImage;
