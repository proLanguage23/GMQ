import { AppTitle } from '@/components/share'

function Two_workExperience({id, text, year, checked, workExperienceResult}: any) {
    

  return (
    <div className={`flex flex-col justify-center items-center hover:bg-secondary cursor-pointer  border border-secondary p-2 rounded-md ${String(id) === workExperienceResult ? 'bg-secondary': 'bg-white' }`}
     onClick={()=> checked(id)}>
        <AppTitle text={year} class_name="text-center p-3 !text-[25px] py-0" />
        <AppTitle text={text} class_name="text-center p-3 !text-[18px] py-0" />
    </div>
  )
}

export default Two_workExperience