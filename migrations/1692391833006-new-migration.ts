import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { ApplicationStatusEnum } from '../src/application/enums/application-status.enum';

export class NewMigration1692391833006 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Applications',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'phone',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'mail',
            type: 'varchar',
          },
          {
            name: 'message',
            type: 'varchar',
            length: '1000',
          },
          {
            name: 'status',
            type: 'enum',
            enum: [
              ApplicationStatusEnum.NEW,
              ApplicationStatusEnum.IN_PROGRESS,
              ApplicationStatusEnum.PROCESSED,
            ],
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'NOW()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'NOW()',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('applications');
  }
}
