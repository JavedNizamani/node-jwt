
module.exports = (sequelize, DataTypes, Model)=>{

    class User extends Model{}

    User.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    },{
        sequelize,
        tableName: 'User',
        timestamps: false
    });
    return User;
}