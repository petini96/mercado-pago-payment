import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    PrimaryKey,
    Default,
    ForeignKey,
    BelongsTo,
    AutoIncrement,
} from "sequelize-typescript"; 
import Plan from "./Plan"; 
import Customer from "./Customer";

@Table({
    tableName: 'Subscriptions',  // Nome da tabela
    timestamps: true,
})
class Subscription extends Model<Subscription> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @ForeignKey(() => Customer)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId!: string;

    @BelongsTo(() => Customer)
    customer!: Customer;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    mercadoPagoPreapprovalId!: string;

    @ForeignKey(() => Plan)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    planId!: number;

    @BelongsTo(() => Plan)
    plan!: Plan;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    status!: string;

    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date;

    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt!: Date;
}

export default Subscription;
