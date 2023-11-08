import { AppTitle } from '@/components/share'

function Two_workExperience_Area({id, name, workExperience_AreaResult, checked}:any) {
  return (
    <div className={`flex flex-col hover:bg-secondary hover:text-white cursor-pointer  border border-secondary p-2 rounded-md ${String(id) === workExperience_AreaResult ? 'bg-secondary text-white': 'bg-white' }`}
     onClick={()=> checked(id)}>
        <AppTitle text={name}  class_name={`text-center p-3 !text-[25px] py-0 ${String(id) === workExperience_AreaResult ? 'text-white': '' }`} />
    </div>
  )
}

export default Two_workExperience_Area