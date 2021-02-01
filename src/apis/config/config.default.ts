import { join } from 'path';

module.exports = (appInfo: any) => {
  const exports = {} as any;

  exports.dbConfig = {
    host: 'sh-cynosdbmysql-grp-h8jook38.sql.tencentcdb.com',
    port: 27281,
    database: 'mybatis',
    username: 'root',
  };

  exports.staticFile = {
    prefix: '/',
    dir: join(appInfo.baseDir, '../build'),
  };
  return exports;
};
