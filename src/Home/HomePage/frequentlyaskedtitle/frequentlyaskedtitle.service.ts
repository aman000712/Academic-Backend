import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFrequentlyaskedtitleDto } from './dto/create-frequentlyaskedtitle.dto';
import { UpdateFrequentlyaskedtitleDto } from './dto/update-frequentlyaskedtitle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Frequentlyaskedtitle } from './entities/frequentlyaskedtitle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FrequentlyaskedtitleService {

  constructor(
    @InjectRepository(Frequentlyaskedtitle) private readonly frequentlyaskedtitleRepository: Repository<Frequentlyaskedtitle>,
  ) { }



  async create(createFrequentlyaskedtitleDto: CreateFrequentlyaskedtitleDto) {

    const datas = await this.frequentlyaskedtitleRepository.findOne({ where: {} });
    if (datas) {
      throw new BadRequestException('frequentlyaskedtitle already exists you can only patch');
    }


    const frequentlyaskedtitle = this.frequentlyaskedtitleRepository.create(createFrequentlyaskedtitleDto);



    return await this.frequentlyaskedtitleRepository.save(frequentlyaskedtitle);
  }

  async findAll() {
    return this.frequentlyaskedtitleRepository.find();
  }

  async update(id: number, updateFrequentlyaskedtitleDto: UpdateFrequentlyaskedtitleDto) {
    return this.frequentlyaskedtitleRepository.update(id, updateFrequentlyaskedtitleDto);
  }

}
