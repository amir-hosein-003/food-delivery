import { pgTable, text, timestamp, integer, uuid } from 'drizzle-orm/pg-core';
import { orders } from './orders';
import { users } from './users';
import { restaurants } from './restaurants';

export const reviews = pgTable('reviews', {
  id: uuid('id').primaryKey().defaultRandom(),
  customerId: uuid('customer_id')
    .references(() => users.id)
    .notNull(),
  restaurantId: uuid('restaurant_id')
    .references(() => restaurants.id)
    .notNull(),
  orderId: uuid('order_id')
    .references(() => orders.id)
    .notNull(),
  driverId: uuid('driver_id').references(() => users.id),
  restaurantRating: integer('restaurant_rating').notNull(),
  driverRating: integer('driver_rating'),
  comment: text('comment'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type Review = typeof reviews.$inferSelect;
export type NewReview = typeof reviews.$inferInsert;
