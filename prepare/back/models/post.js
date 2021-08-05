module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      //RetweetId
    },
    {
      charset: "utf8mb4", // 이모티콘 까지 mb4
      collate: "utf8mb4_general_ci", //한글 저장
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); //어떤 게시글은 작성자한테 속해있다
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); //다대다 관계
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" });
    db.Post.belongsTo(db.Post, { as: "Retweet" }); //어떤게시글에 리트윗
  };
  return Post;
};
