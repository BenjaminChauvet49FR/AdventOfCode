const DAYS_PER_MONTH_CUMULATED = [-666, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334] ; // Month : 1-12 for Jan to Dec ; Day 0 = January 1st, day 31 = February 1st, etc... (+1 added after March in bissextile years)
function dateInYear(month, day, bissextile = false) {
	return DAYS_PER_MONTH_CUMULATED[month] + day + ((bissextile && month > 2 ? 0 : 1));
}
