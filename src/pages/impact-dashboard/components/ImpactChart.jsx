import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const ImpactChart = ({ type, data, title, height = 300 }) => {
  const colors = ['#FF6B35', '#4ECDC4', '#FFE66D', '#28A745', '#FFC107', '#DC3545'];

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E9ECEF" />
              <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6C757D' }} />
              <YAxis tick={{ fontSize: 12, fill: '#6C757D' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E9ECEF',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(44, 62, 80, 0.15)'
                }} 
              />
              <Bar dataKey="value" fill="#FF6B35" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E9ECEF" />
              <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6C757D' }} />
              <YAxis tick={{ fontSize: 12, fill: '#6C757D' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E9ECEF',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(44, 62, 80, 0.15)'
                }} 
              />
              <Line type="monotone" dataKey="value" stroke="#FF6B35" strokeWidth={3} dot={{ fill: '#FF6B35', strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100)?.toFixed(0)}%`}
              >
                {data?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors?.[index % colors?.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E9ECEF',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(44, 62, 80, 0.15)'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border shadow-card">
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      <div className="w-full" aria-label={`${title} Chart`}>
        {renderChart()}
      </div>
    </div>
  );
};

export default ImpactChart;