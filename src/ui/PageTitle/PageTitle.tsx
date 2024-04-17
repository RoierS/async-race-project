import styles from "./PageTitle.module.css";

interface IPageTitleProps {
  title: string;
}

function PageTitle({ title }: IPageTitleProps) {
  return <h2 className={styles.title}>{title}</h2>;
}

export default PageTitle;
