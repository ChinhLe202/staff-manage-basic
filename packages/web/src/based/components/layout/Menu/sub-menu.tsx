import { mdiAccountCogOutline, mdiCardAccountDetailsOutline, mdiCardAccountPhoneOutline } from '@mdi/js';
import Icon from '@mdi/react';

export const SubMenu = () => {
    const subMenu = [
        {
            icon: mdiCardAccountDetailsOutline,
            title: 'Danh sách nhân viên'
        },
        {
            icon: mdiAccountCogOutline,
            title: 'Quản lý vai trò'
        },
        {
            icon: mdiCardAccountPhoneOutline,
            title: 'Quản lý nhân viên Sale'
        }
    ];

    return (
        <div className='flex flex-col gap-4 min-w-[300px] text-md text[#141414] px-4 py-2 bg-[#EEF3FE]'>
            {subMenu.map((item, index) => (
                <div
                    key={index}
                    className={`flex items-center p-2 rounded-r-2xl  
              ${item.title === 'Danh sách nhân viên' ? 'bg-[#D4E2FC]' : ''}`}
                >
                    <Icon path={item.icon} className='w-[18px] h-[20px] text-gray-600' />
                    <span className='ml-2'>{item.title}</span>
                </div>
            ))}
        </div>
    );
};
