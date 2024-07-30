import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    PrimaryKey,
    AutoIncrement,
  } from "sequelize-typescript"; 
  
  @Table({
    timestamps: true,
  })
  class Plan extends Model<Plan> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;
  
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;
  
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description!: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    frequency!: string;
  
    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    price!: number;
   
    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date;
  
    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt!: Date;
  }
  
  export default Plan;
  