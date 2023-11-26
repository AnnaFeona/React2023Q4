import style from './loader.module.scss';

export const Loader = () => (
  <>
    <div className={style.loader_container}>
      <div>Loading...</div>
      <div className={style.loader}></div>
    </div>
  </>
);
