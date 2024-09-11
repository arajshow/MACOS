 <div className="relative">
   <div className="flex  bg-gray-100 mt-8">
     {/* Sidebar */}
     <div className="w-64 bg-gray-200 p-4">
       {sidebarItems.map((section) => (
         <div key={section.name} className="mb-4">
           <h2 className="font-bold mb-2">{section.name}</h2>
           <ul>
             {section.items.map((item) => (
               <li
                 key={item}
                 className={`flex items-center p-2 cursor-pointer ${
                   selectedItem === item ? "bg-blue-200" : ""
                 }`}
                 onClick={() => handleItemClick(item)}
                 onContextMenu={(e) => handleContextMenu(e, item)}
               >
                 <Folder className="mr-2" size={16} />
                 {item}
               </li>
             ))}
           </ul>
         </div>
       ))}
     </div>

     {/* Main content area */}
     <div className="flex-1 p-4">
       {selectedItem && (
         <div className="bg-white rounded shadow p-4">
           <h2 className="text-xl font-bold mb-4">{selectedItem}</h2>
           <p>Content for {selectedItem} goes here.</p>
         </div>
       )}
     </div>

     {/* Context menu */}
     {contextMenu.visible && (
       <div
         className="absolute bg-white shadow-md rounded py-2"
         style={{ top: contextMenu.y, left: contextMenu.x }}
       >
         <button
           className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
           onClick={() => handleOptionClick("New Folder")}
         >
           <Plus size={16} className="mr-2" /> New Folder
         </button>
         <button
           className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
           onClick={() => handleOptionClick("Get Info")}
         >
           <Info size={16} className="mr-2" /> Get Info
         </button>
         <button
           className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
           onClick={() => handleOptionClick("Delete")}
         >
           <Trash2 size={16} className="mr-2" /> Delete
         </button>
         <button
           className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
           onClick={() => handleOptionClick("Copy")}
         >
           <Copy size={16} className="mr-2" /> Copy
         </button>
       </div>
     )}
   </div>
 </div>;

  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

    const handleContextMenu = (e, item) => {
      e.preventDefault();
      setSelectedItem(item);
      setContextMenu({ visible: true, x: e.clientX, y: e.clientY });
    };
  const handleOptionClick = (option) => {
    console.log(`${option} clicked for ${selectedItem}`);
    setContextMenu({ visible: false, x: 0, y: 0 });
  };