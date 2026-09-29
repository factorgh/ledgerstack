/**
 * Site Access & Status Configuration
 *
 * Feature: `isOwing`
 * - When `IS_OWING` is set to `true`: The entire website displays the "Website Under Construction" page.
 * - When `IS_OWING` is set to `false`: The website functions normally with all pages, navigation, and features available.
 *
 * You can toggle this directly below (change `IS_OWING_DEFAULT = true` or `false`),
 * or override it via the environment variable `NEXT_PUBLIC_IS_OWING="true"`.
 */

// Toggle this boolean flag to control the under construction screen:
const IS_OWING_DEFAULT = false;

export const IS_OWING: boolean =
  typeof process !== "undefined" && process.env.NEXT_PUBLIC_IS_OWING !== undefined
    ? process.env.NEXT_PUBLIC_IS_OWING === "true"
    : IS_OWING_DEFAULT;
