import Joi from 'joi';
import { NanoidSchema } from './partials/nanoid';
import { ObjectIdSchema } from './partials/objectid';

const DeviceCreateSchema = Joi.object().keys({
  _id: ObjectIdSchema,
  id: NanoidSchema.required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  tree_id: ObjectIdSchema.required(),
  devicetype_id: ObjectIdSchema.required(),
  datasource_key: Joi.string().required()
});
  
export const DeviceSchemas = {

  _create: DeviceCreateSchema,

};