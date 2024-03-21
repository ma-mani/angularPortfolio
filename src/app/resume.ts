interface Experience {
  title: string;
  data: {
    job_title: string;
    company: string;
    start_date: string;
    end_date: string;
    tasks: string[];
  }[];
}

interface Education extends Experience {}
interface WorkExperience extends Experience {}

export interface ResumeData {
  education: Education;
  work_experience: WorkExperience;
}
