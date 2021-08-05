module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      //userId:1,
      //PostId:3,
    },
    {
      charset: "utf8mb4", // 이모티콘 까지 mb4
      collate: "utf8mb4_general_ci", //한글 저장
    }
  );
  Comment.associate = (db) => {
    db.Comment.belongsTo(db.User); //컬럼이 생김
    db.Comment.belongsTo(db.Post);
  };
  return Comment;
};
