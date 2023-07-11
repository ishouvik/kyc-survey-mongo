import {
  Entity,
  ObjectIdColumn,
  ObjectId,
  Column
} from 'typeorm'

@Entity({
  name: 'formResponse'
})
export class FormResponse {
    @ObjectIdColumn()
    id: ObjectId

    @Column()
    ownerId: string

    @Column()
    formId: string

    @Column()
    questionId: string

    @Column()
    answerType: string

    @Column()
    answerValue: string | number | Array<any> | Object
}
