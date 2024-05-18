import { hasLessInterpolation, hasPsvInterpolation, hasScssInterpolation } from '../utils'

/**
 * Check whether a string has interpolation
 *
 * @param {string} string
 * @return {boolean} If `true`, a string has interpolation
 */
export function hasInterpolation (string /*: string */) /*: boolean */ {
  // SCSS or Less interpolation
  if (
    hasLessInterpolation(string) ||
    hasScssInterpolation(string) ||
    hasPsvInterpolation(string)
  ) {
    return true
  }

  return false
}
