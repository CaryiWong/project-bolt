import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FamilyMemberList from './components/FamilyMemberList';
import Header from './components/layout/Header';
import TabButton from './components/ui/TabButton';
import { Toaster } from 'react-hot-toast';

function App() {
  const [activeTab, setActiveTab] = useState('tasks');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-4 mb-8">
          <TabButton
            isActive={activeTab === 'tasks'}
            onClick={() => setActiveTab('tasks')}
          >
            任务列表
          </TabButton>
          <TabButton
            isActive={activeTab === 'members'}
            onClick={() => setActiveTab('members')}
          >
            家庭成员
          </TabButton>
        </div>
        
        <div className="space-y-8">
          {activeTab === 'tasks' && (
            <>
              <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">添加新任务</h2>
                  <TaskForm />
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">任务列表</h2>
                <TaskList />
              </div>
            </>
          )}
          
          {activeTab === 'members' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">家庭成员</h2>
              <FamilyMemberList />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;