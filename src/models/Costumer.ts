import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    HasOne
} from "sequelize-typescript";

import PreapprovalPlan from "./PreapprovalPlan";

@Table({
    timestamps: true,
})
class Customer extends Model<Customer> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @Column(DataType.STRING)
    name!: string;

    @Column({
        unique: true,
        allowNull: false,
    })
    email!: string;

    @ForeignKey(() => PreapprovalPlan)
    @Column(DataType.INTEGER)
    preapprovalPlanId!: number;

    @HasOne(() => PreapprovalPlan)
    preapprovalPlan!: PreapprovalPlan;

    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date;

    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt!: Date;
}

export default Customer;
