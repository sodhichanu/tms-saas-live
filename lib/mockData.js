export const regions = ['Delhi', 'Panipat', 'UP', 'Bihar', 'Punjab', 'Himachal', 'Jammu'];

export const kpis = {
  activeTrucks: 86,
  deliveriesInProgress: 42,
  delayedShipments: 9,
  revenue: 4825000,
  fuelCost: 1390000,
};

export const trustSignals = [
  'ISO 9001:2015 Process Certified',
  'FASTag Enabled Fleet',
  '24x7 Control Tower',
  'GPS + ePOD Verified Delivery'
];

export const testimonials = [
  { name: 'NorthSteel Pvt Ltd', quote: 'On-time delivery improved from 78% to 92% in two months.' },
  { name: 'Delhi Cement Traders', quote: 'Live tracking reduced dispatch calls by more than 40%.' },
  { name: 'Punjab Agro Corp', quote: 'Automated invoicing and POD visibility cut billing delays massively.' },
];

export const trucks = [
  { id: 'TRK-101', reg: 'HR38AB1234', type: 'Open Body', status: 'In Transit', region: 'Panipat', capacity: 16, availableCapacity: 4, nextServiceInDays: 9, fuelAvg: 3.9 },
  { id: 'TRK-102', reg: 'DL1LX8899', type: 'Container', status: 'Idle', region: 'Delhi', capacity: 20, availableCapacity: 20, nextServiceInDays: 21, fuelAvg: 4.2 },
  { id: 'TRK-103', reg: 'UP78ZT5521', type: 'Trailer', status: 'Maintenance', region: 'UP', capacity: 28, availableCapacity: 28, nextServiceInDays: 2, fuelAvg: 2.7 },
  { id: 'TRK-104', reg: 'PB10ZZ9012', type: 'Open Body', status: 'In Transit', region: 'Punjab', capacity: 18, availableCapacity: 6, nextServiceInDays: 14, fuelAvg: 3.8 },
  { id: 'TRK-105', reg: 'BR01LM7788', type: 'Container', status: 'In Transit', region: 'Bihar', capacity: 22, availableCapacity: 8, nextServiceInDays: 5, fuelAvg: 3.5 },
];

export const orders = [
  { id: 'ORD-5001', pickup: 'Panipat', drop: 'Patna', material: 'Steel Coils', weight: 14, dimensions: '16x7x6 ft', status: 'In Transit', truck: 'TRK-101', driver: 'Rakesh Kumar', serviceLevel: 'Express', etaHours: 9 },
  { id: 'ORD-5002', pickup: 'Delhi', drop: 'Kanpur', material: 'Cement Bags', weight: 12, dimensions: '14x7x6 ft', status: 'Assigned', truck: 'TRK-102', driver: 'Sanjay Yadav', serviceLevel: 'Standard', etaHours: 15 },
  { id: 'ORD-5003', pickup: 'Ludhiana', drop: 'Jammu', material: 'Agri Equipment', weight: 10, dimensions: '13x6x6 ft', status: 'Pending', truck: '-', driver: '-', serviceLevel: 'Standard', etaHours: 24 },
];

export const trackingLookup = {
  ORD5001: { orderId: 'ORD-5001', status: 'In Transit', location: 'Near Lucknow Bypass', eta: 'Today 8:40 PM', lat: 26.88, lng: 80.94 },
  ORD5002: { orderId: 'ORD-5002', status: 'Assigned', location: 'Dispatch yard, Delhi', eta: 'Tomorrow 11:10 AM', lat: 28.61, lng: 77.20 },
  ORD5003: { orderId: 'ORD-5003', status: 'Pending', location: 'Awaiting allocation', eta: 'TBD', lat: 31.0, lng: 75.8 },
};

export const drivers = [
  { id: 'DRV-01', name: 'Rakesh Kumar', assignedTruck: 'TRK-101', trips: 47, salary: 34000, hosHoursToday: 8.5, hosLimit: 11, compliance: 'Compliant', licenseExpiry: '2027-11-10' },
  { id: 'DRV-02', name: 'Sanjay Yadav', assignedTruck: 'TRK-102', trips: 39, salary: 32000, hosHoursToday: 10.8, hosLimit: 11, compliance: 'Near Limit', licenseExpiry: '2026-09-22' },
  { id: 'DRV-03', name: 'Amit Singh', assignedTruck: 'TRK-105', trips: 33, salary: 30000, hosHoursToday: 6.2, hosLimit: 11, compliance: 'Compliant', licenseExpiry: '2028-01-14' },
];

export const customers = [
  { name: 'NorthSteel Pvt Ltd', orders: 126, payment: 'Partial', lastContact: '2026-03-15', outstanding: 340000, savedAddress: 'Panipat Yard 4' },
  { name: 'Delhi Cement Traders', orders: 91, payment: 'Pending', lastContact: '2026-03-14', outstanding: 590000, savedAddress: 'Narela Plant, Delhi' },
  { name: 'Punjab Agro Corp', orders: 74, payment: 'Paid', lastContact: '2026-03-16', outstanding: 0, savedAddress: 'Ludhiana Unit 2' },
];

export const invoices = [
  { invoiceNo: 'INV-10041', orderId: 'ORD-5001', customer: 'NorthSteel Pvt Ltd', amount: 128000, status: 'Partial', dueDate: '2026-03-28' },
  { invoiceNo: 'INV-10042', orderId: 'ORD-5002', customer: 'Delhi Cement Traders', amount: 84000, status: 'Pending', dueDate: '2026-03-30' },
  { invoiceNo: 'INV-10043', orderId: 'ORD-4979', customer: 'Punjab Agro Corp', amount: 91000, status: 'Paid', dueDate: '2026-03-20' },
];

export const financeSeries = [
  { name: 'Jan', revenue: 32, expense: 19, profit: 13 },
  { name: 'Feb', revenue: 35, expense: 21, profit: 14 },
  { name: 'Mar', revenue: 41, expense: 25, profit: 16 },
  { name: 'Apr', revenue: 46, expense: 28, profit: 18 },
  { name: 'May', revenue: 51, expense: 30, profit: 21 },
  { name: 'Jun', revenue: 49, expense: 29, profit: 20 },
];

export const trackingPoints = [
  { id: 'TRK-101', lat: 28.6139, lng: 77.209, route: ['Delhi', 'Panipat', 'Lucknow', 'Patna'], alert: 'Delay risk', optimizedEtaHours: 8.5 },
  { id: 'TRK-104', lat: 31.1471, lng: 75.3412, route: ['Ludhiana', 'Jalandhar', 'Pathankot', 'Jammu'], alert: 'On route', optimizedEtaHours: 6.9 },
  { id: 'TRK-105', lat: 25.5941, lng: 85.1376, route: ['Varanasi', 'Buxar', 'Patna'], alert: 'Route deviation', optimizedEtaHours: 4.4 },
];

export const communicationLogs = [
  { customer: 'NorthSteel Pvt Ltd', channel: 'WhatsApp', message: 'Delivery window confirmed for 8 PM', by: 'Dispatcher', at: '2026-03-16 15:20' },
  { customer: 'Delhi Cement Traders', channel: 'Call', message: 'Requested partial unloading support', by: 'Operations', at: '2026-03-16 12:05' },
  { customer: 'Punjab Agro Corp', channel: 'Email', message: 'Invoice INV-10043 shared', by: 'Accounts', at: '2026-03-16 09:44' },
];

export function estimateQuote({ distanceKm, weightTons, cargoType, serviceLevel }) {
  const basePerKm = cargoType === 'Fragile' ? 82 : cargoType === 'Hazmat' ? 96 : 68;
  const serviceMultiplier = serviceLevel === 'Express' ? 1.25 : serviceLevel === 'Priority' ? 1.15 : 1;
  const loadFactor = Math.max(1, weightTons / 10);
  const estimated = Math.round(distanceKm * basePerKm * serviceMultiplier * loadFactor);
  return estimated;
}
