import {
    Table,
    Column,
    Model,
    DataType,
    CreatedAt,
    UpdatedAt,
    PrimaryKey,
    AutoIncrement
} from "sequelize-typescript";

@Table({
    tableName: 'Customers',
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

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    mercadoPagoCustomerId?: number;

    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date;

    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt!: Date;
}

export default Customer;
