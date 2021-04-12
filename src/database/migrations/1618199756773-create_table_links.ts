import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableLinks1618199756773 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name:'links',
        columns: [
          {
            name:'id',
            type:'integer',
            unsigned:true,
            isPrimary:true,
            isGenerated:true,
            generationStrategy:'increment',
          },
          {
            name:'name',
            type:'varchar'
          },
          {
            name:'link',
            type:'varchar'
          }
        ]
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("links")
    }

}
