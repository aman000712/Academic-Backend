import { Blogcategory } from "src/blogcategories/entities/blogcategory.entity";
import { Fileupload } from "src/fileupload/entities/fileupload.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blogsandupdate {

    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(() => Fileupload)
    @JoinColumn()
    blogimageid: Fileupload


    @ManyToOne(()=>Blogcategory,{eager:true})
    @JoinColumn()
    categoryStatus:Blogcategory

    @Column()
    blogtitle: string

    @Column()
    blogname: string

    @Column()
    blogdate: string


    @Column({type:"longtext"})
    description: string


}
