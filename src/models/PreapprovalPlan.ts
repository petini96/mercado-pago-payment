import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
  BelongsTo,
  ForeignKey
} from "sequelize-typescript";
import Customer from "./Costumer";

@Table({
  timestamps: true,
})
class PreapprovalPlan extends Model<PreapprovalPlan> {
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
      type: DataType.FLOAT,
      allowNull: false,
  })
  price!: number;

  @ForeignKey(() => Customer)
  @Column(DataType.INTEGER)
  customerId!: number;

  @BelongsTo(() => Customer)
  customer!: Customer;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt!: Date;

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt!: Date;
}

export default PreapprovalPlan;
