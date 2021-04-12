"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableLinks1618199756773 = void 0;
const typeorm_1 = require("typeorm");
class createTableLinks1618199756773 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'links',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'link',
                    type: 'varchar'
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("links");
    }
}
exports.createTableLinks1618199756773 = createTableLinks1618199756773;
