import { Media } from '../../models/media/media.model';

export interface MediaRepository {
    addOne(media: Media): Media;
    getById(id: string): Media;
    getAll(): Media[];
}
