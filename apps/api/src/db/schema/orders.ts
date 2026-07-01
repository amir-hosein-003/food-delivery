import {
  pgTable,
  pgEnum,
  text,
  uuid,
  numeric,
  timestamp,
} from 'drizzle-orm/pg-core';
import { menuItems } from './menus';
import { users } from './users';
import { restaurants } from './restaurants';

export const orderStatusEnum = pgEnum('order_enum', [
  'PENDING', // placed, waiting for payment
  'CONFIRMED', // payment confirmed by stripe webhook
  'PREPARING', // restaurant accepted and is cooking
  'READY', // ready for driver pickup
  'PICKED_UP', // driver has picked up the item
  'DELIVERED', // order delivered to customer
  'CANCELLED', // cancelled at any stage
]);

export const orders = pgTable('orders', {
  id: uuid('id').primaryKey().defaultRandom(),
  customerId: uuid('customer_id')
    .references(() => users.id)
    .notNull(),
  restaurantId: uuid('restaurant_id')
    .references(() => restaurants.id)
    .notNull(),
  driverId: uuid('driver_id').references(() => users.id),
  status: orderStatusEnum('status').notNull().default('PENDING'),
  totalAmount: numeric('total_amount', { precision: 10, scale: 2 }).notNull(),
  deliveryAddress: text('delivery_address').notNull(),
  stripePaymentIntentId: text('stripe_payment_intent_id'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const orderItems = pgTable('order_items', {
  id: uuid('id').primaryKey().defaultRandom(),
  orderId: uuid('order_id')
    .references(() => orders.id, { onDelete: 'cascade' })
    .notNull(),
  menuItemId: uuid('menu_item_id')
    .references(() => menuItems.id, { onDelete: 'cascade' })
    .notNull(),
  quantity: numeric('quantity').notNull(),
  unitPrice: numeric('unit_price', { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;
export type OrderItem = typeof orderItems.$inferSelect;
