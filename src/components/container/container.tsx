import styles from './styles.module.scss';
import classNames from 'classnames';

interface Props {
  center?: boolean;
  children: React.ReactNode;
}

const Container = ({center, children}: Props) => (
  <div className={classNames(styles.container, {[styles.center]: center})}>
    {children}
  </div>
);

export {Container};
