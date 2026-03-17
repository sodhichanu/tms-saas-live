export const regions = ['Delhi', 'Panipat', 'UP', 'Bihar', 'Punjab', 'Himachal', 'Jammu'];

export const kpis = {
  activeTrucks: 86,
  deliveriesInProgress: 42,
  delayedShipments: 9,
  revenue: 4825000,
  fuelCost: 1390000,
};

export const trucks = [
  { id: 'TRK-101', reg: 'HR38AB1234', type: 'Open Body', status: 'In Transit', region: 'Panipat', capacity: 16 },
  { id: 'TRK-102', reg: 'DL1LX8899', type: 'Container', status: 'Idle', region: 'Delhi', capacity: 20 },
  { id: 'TRK-103', reg: 'UP78ZT5521', type: 'Trailer', status: 'Maintenance', region: 'UP', capacity: 28 },
  { id: 'TRK-104', reg: 'PB10ZZ9012', type: 'Open Body', status: 'In Transit', region: 'Punjab', capacity: 18 },
  { id: 'TRK-105', reg: 'BR01LM7788', type: 'Container', status: 'In Transit', region: 'Bihar', capacity: 22 },
];

export const orders = [
  { id: 'ORD-5001', pickup: 'Panipat', drop: 'Patna', material: 'Steel Coils', weight: 14, status: 'In Transit', truck: 'TRK-101', driver: 'Rakesh Kumar' },
  { id: 'ORD-5002', pickup: 'Delhi', drop: 'Kanpur', material: 'Cement Bags', weight: 12, status: 'Assigned', truck: 'TRK-102', driver: 'Sanjay Yadav' },
  { id: 'ORD-5003', pickup: 'Ludhiana', drop: 'Jammu', material: 'Agri Equipment', weight: 10, status: 'Pending', truck: '-', driver: '-' },
];

export const drivers = [
  { id: 'DRV-01', name: 'Rakesh Kumar', assignedTruck: 'TRK-101', trips: 47, salary: 34000 },
  { id: 'DRV-02', name: 'Sanjay Yadav', assignedTruck: 'TRK-102', trips: 39, salary: 32000 },
  { id: 'DRV-03', name: 'Amit Singh', assignedTruck: 'TRK-105', trips: 33, salary: 30000 },
];

export const customers = [
  { name: 'NorthSteel Pvt Ltd', orders: 126, payment: 'Partial', lastContact: '2026-03-15' },
  { name: 'Delhi Cement Traders', orders: 91, payment: 'Pending', lastContact: '2026-03-14' },
  { name: 'Punjab Agro Corp', orders: 74, payment: 'Paid', lastContact: '2026-03-16' },
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
  { id: 'TRK-101', lat: 28.6139, lng: 77.209, route: ['Delhi', 'Panipat', 'Lucknow', 'Patna'], alert: 'Delay risk' },
  { id: 'TRK-104', lat: 31.1471, lng: 75.3412, route: ['Ludhiana', 'Jalandhar', 'Pathankot', 'Jammu'], alert: 'On route' },
  { id: 'TRK-105', lat: 25.5941, lng: 85.1376, route: ['Varanasi', 'Buxar', 'Patna'], alert: 'Route deviation' },
];
