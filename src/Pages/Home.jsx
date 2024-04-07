import React, { useState } from 'react';
import SearchSelect from '../components/SearchSelect';

const Home = () => {
    const [destinations, setDestinations] = useState({ name: '', type: '', activities: '' });
    const[tags,setTags]=useState([]);
    const [activities,setActivities]=useState();
    const [show1,setShow1]=useState(false);
    const [show2,setShow2]=useState(false);
    const [show3,setShow3]=useState(false);
    
    const handleCLick1 = (data) => {
        setDestinations({ name: '', type: '', activities: '' });
        setDestinations(prev => ({ ...prev, name: data }));
        const ind = destinationsData.indexOf(data);
        const newTags = place_type[ind].split(',');
        const newActivities = ActivitiesData[ind].split(',');
        setTags(newTags);
        setActivities(newActivities);
        // Note: Logging `destinations` immediately after setting it won't reflect the update due to async behavior.
        // To see the updated value, use useEffect or place the log statement in the body of the component outside this function.
    };
    
    const handleCLick2 = (data) => {
        setDestinations(prev => ({ ...prev, type: data }));
    };
    

    const handleClick3 = (data) => {
        setDestinations(prev => ({ ...prev, activities: data }));
    };
    const destinationsData=[
        "Paris",
        "Everest Base Camp",
        "Maldives",
        "Banff National Park",
        "Machu Picchu",
        "Venice",
        "Sahara Desert",
        "Lake Tahoe",
        "Iguazu Falls",
        "Bali",
        "Black Forest",
        "Petra",
        "Aspen",
        "Kyoto",
        "Great Barrier Reef",
        "Yellowstone National Park",
        "Amalfi Coast",
        "Galapagos Islands",
        "Serengeti National Park",
        "Zermatt"
    ]

    const place_type=[
        "City, Historical, Architectural",
        "Mountain",
        "Beach, Island, Underwater",
        "Mountain, Forest, Snow-Covered",
        "Mountain, Historical",
        "City, Historical",
        "Desert",
        "Lake, Snow-Covered",
        "Waterfall, Forest",
        "Island, Beach",
        "Forest",
        "Historical, Architectural, Desert",
        "Snow-Covered",
        "City, Historical",
        "Beach, Island, Underwater",
        "Mountain, Forest",
        "Beach, Historical",
        "Island, Wildlife-Viewing",
        "Rural, Wildlife-Viewing",
        "Mountain, Snow-Covered"
    ]

    const ActivitiesData=[
        "Sightseeing, Shopping, Dining, Cultural-Experiences",
        "Trekking, Camping, Mountaineering, Nature-Viewing, Wildlife-Viewing",
        "Water-Sports, Wellness, Adventure-Sports",
        "Hiking, Snow-Sports, Nature-Viewing",
        "Trekking, Cultural-Experiences, Sightseeing",
        "Sightseeing, Cultural-Experiences, Shopping",
        "Camping, Adventure-Sports, Nature-Viewing, Wildlife-Viewing",
        "Water-Sports, Camping, Hiking",
        "Sightseeing, Nature-Viewing",
        "Wellness, Water-Sports, Cultural-Experiences",
        "Hiking, Nature-Viewing, Wildlife-Viewing, Camping",
        "Sightseeing, Trekking, Cultural-Experiences",
        "Snow-Sports, Trekking, Nature-Viewing, Wildlife-Viewing",
        "Sightseeing, Cultural-Experiences",
        "Snorkeling, Wildlife-Viewing, Boating",
        "Hiking, Wildlife-Viewing, Camping",
        "Sightseeing, Boating, Dining",
        "Wildlife-Viewing, Snorkeling, Nature-Viewing",
        "Wildlife-Viewing, Nature-Viewing, Camping",
        "Snow-Sports, Sightseeing, Nature-Viewing"
    ];

 
    return (
        <div className='flex justify-center my-20'>
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-5'>
                <label htmlFor="">Select  Destination</label>
                <input type="text" value={destinations.name} className='border py-2 px-5' readOnly onFocus={e=>setShow1(true)} onBlur={e=>setShow1(false)} />
             
                    <SearchSelect data={destinationsData} func={handleCLick1} isMulti={false}/>
            </div>

            <div className='flex flex-col gap-5'>
                <label htmlFor="">Select  Place type</label>
                <input type="text" value={destinations.type} className='border py-2 px-5' readOnly onFocus={e=>setShow2(true)} onBlur={e=>setShow2(false)} />
      
                     <SearchSelect data={tags} func={handleCLick2} isMulti={true}/>
               
            </div>

            <div className='flex flex-col gap-5'>
                <label htmlFor="">Select  Place type</label>
                <input type="text" value={destinations.activities} className='border py-2 px-5' readOnly onFocus={e=>setShow3(true)} onBlur={e=>setShow3(false)} />
                {/* {
                    show3 && */}
                     <SearchSelect data={activities} func={handleClick3} isMulti={true}/>
                {/* } */}
            </div>


        </div>
        </div>
    );
}

export default Home;
